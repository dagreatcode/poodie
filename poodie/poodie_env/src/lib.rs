use dotenv::dotenv;
use std::env;

pub fn load_env() {
    dotenv().ok();

    let my_var = env::var("MY_VAR").unwrap_or_else(|_| "default".to_string());
    println!("MY_VAR: {}", my_var);
}
