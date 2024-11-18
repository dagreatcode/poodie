use warp::{Filter, Rejection, Reply};  // Import necessary items from Warp
use poodie_parser::PoodieParser;  // Import PoodieParser for parsing routes

mod env;  // Import the env module

#[tokio::main]
async fn main() {
    // Load environment variables
    env::load_env();

    // Parse the `.poo` file to get routes and handlers
    let routes = match PoodieParser::parse_poo_file("example.poo") {
        Ok(parsed_routes) => parsed_routes,
        Err(e) => {
            eprintln!("Error parsing .poo file: {}", e);
            return; // Handle error gracefully
        }
    };

    // Initialize the first filter with a proper error type (Rejection)
    let mut dynamic_routes = warp::any()
        .map(warp::reply) // This will always succeed, hence `Infallible` error type
        .map_err(|_| warp::reject::not_found());  // Convert `Infallible` errors to `Rejection`

    // Iterate over the routes and chain them with `or()`
    for route in routes {
        dynamic_routes = dynamic_routes.or(
            warp::path(route.path)
                .map(move || warp::reply::html(route.handler.clone()))  // Simple handler
                .map_err(|_| warp::reject::not_found())  // Convert error type to `Rejection`
        );
    }

    // Box the final filter to make it uniform (all filters must have the same type)
    let boxed_routes: warp::filters::BoxedFilter<(dyn Reply,)> = dynamic_routes.boxed();

    // Start the HTTP server with the dynamic routes
    warp::serve(boxed_routes)
        .run(([127, 0, 0, 1], 8080))
        .await;
}

