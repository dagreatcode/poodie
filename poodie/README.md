Poodie/                      # Root project directory
├── Cargo.toml               # Workspace manifest (root)
├── example.poo              # Example Poodie script file
├── poodie_runtime/           # Core runtime crate (handles execution, HTTP, WebSockets)
│   ├── Cargo.toml           # poodie_runtime crate dependencies
│   └── src/
│       └── lib.rs           # Core runtime logic (execution, HTTP routes, WebSockets)
|       └── main.rs          # <-- Add this file for the binary target
├── poodie_parser/            # Parser for .poo files
│   ├── Cargo.toml           # poodie_parser crate dependencies
│   └── src/
│       └── lib.rs           # Parsing .poo files to extract routes and handlers
├── poodie_routes/            # Route handling (HTTP routes)
│   ├── Cargo.toml           # poodie_routes crate dependencies
│   └── src/
│       └── lib.rs           # Defines HTTP route handling logic
|       └── main.rs          # <-- Add this file for the binary target
├── poodie_websocket/         # WebSocket handling
│   ├── Cargo.toml           # poodie_websocket crate dependencies
│   └── src/
│       └── lib.rs           # WebSocket server and handler
└── poodie_env/               # .env file handling (for environment variables)
    ├── Cargo.toml           # poodie_env crate dependencies
    └── src/
        └── lib.rs           # Load .env and environment variable support

Poodie/                          # Root project directory
├── Cargo.toml                   # Root workspace manifest (declares all sub-crates)
├── poodie_runtime/
│   ├── src/
│   │   ├── lib.rs  // Main entry file for the `poodie_runtime` crate
│   │   ├── version.rs
│   │   ├── parser.rs
│   │   ├── routes.rs
│   │   ├── websocket.rs
│   │   └── env.rs
│   └── Cargo.toml
├── poodie_parser/                # Parsing .poo files
│   ├── Cargo.toml               # poodie_parser crate dependencies
│   └── src/
│       └── lib.rs               # .poo file parsing
├── poodie_routes/                # Route handling (HTTP routes)
│   ├── Cargo.toml               # poodie_routes crate dependencies
│   └── src/
│       └── lib.rs               # HTTP route handling
├── poodie_websocket/             # WebSocket server
│   ├── Cargo.toml               # poodie_websocket crate dependencies
│   └── src/
│       └── lib.rs               # WebSocket logic
└── poodie_env/                   # .env file handling
    ├── Cargo.toml               # poodie_env crate dependencies
    └── src/
        └── lib.rs               # Load .env and config
