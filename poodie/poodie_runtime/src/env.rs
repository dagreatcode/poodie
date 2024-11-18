// src/env.rs
use dotenv::dotenv;
use std::env;

pub fn load_env() {
    dotenv().ok();  // Loads environment variables from a .env file

    // Example: print an environment variable
    if let Ok(val) = env::var("MY_ENV_VAR") {
        println!("Loaded MY_ENV_VAR: {}", val);
    } else {
        println!("MY_ENV_VAR is not set.");
    }
}
