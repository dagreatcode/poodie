mod version;
mod parser;
mod routes;
mod websocket;
mod env;

use warp::Filter;
use poodie_parser::PoodieParser;
// use std::fs;

#[tokio::main]
async fn main() {
    // Load environment variables
    env::load_env();

    // Parse the `.poo` file to get routes and handlers
    let routes = PoodieParser::parse_poo_file("example.poo").unwrap();
    
    // Process and set up routes and WebSockets dynamically based on the parsed file
    for route in routes {
        println!("Route: {} -> Handler: {}", route.path, route.handler);
    }

    // Start the HTTP server with the parsed routes
    let routes = warp::path("hello")
        .map(|| warp::reply::html("Hello from Poodie!"));

    warp::serve(routes)
        .run(([127, 0, 0, 1], 8080))
        .await;
}
