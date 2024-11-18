Poodie/
├── Cargo.toml               # Root workspace manifest
├── poodie_runtime/           # Core runtime crate
│   ├── Cargo.toml           # poodie_runtime crate dependencies
│   └── src/
│       └── lib.rs           # Core runtime logic (no main.rs here)
├── poodie_parser/            # Parsing crate
│   ├── Cargo.toml           # poodie_parser crate dependencies
│   └── src/
│       └── lib.rs           # Parsing logic
├── poodie_routes/            # Route handling crate
│   ├── Cargo.toml           # poodie_routes crate dependencies
│   └── src/
│       └── lib.rs           # Route handling logic (no main.rs here)
├── poodie_websocket/         # WebSocket handling crate
│   ├── Cargo.toml           # poodie_websocket crate dependencies
│   └── src/
│       └── lib.rs           # WebSocket server handler
├── poodie_env/               # Environment variable handling crate
│   ├── Cargo.toml           # poodie_env crate dependencies
│   └── src/
│       └── lib.rs           # Environment variable handling
└── poodie_server/            # New binary crate with main.rs
    ├── Cargo.toml           # poodie_server crate dependencies
    └── src/
        └── main.rs          # Entry point for the server
