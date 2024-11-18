use warp::Filter;

pub async fn setup_routes() {    // Setup a basic HTTP route
    let hello_route = warp::path("hello")
        .map(|| warp::reply::html("Hello from Poodie!"));
    
    warp::serve(hello_route)
        .run(([127, 0, 0, 1], 8080))
        .await;  // Add .await here to properly run the server 
}
