/project-folder
  ├── server.poodie      # The main Poodie server code file
  ├── example.poo       # The route definition file
  ├── .env              # Optional: .env file with environment variables (if needed)

Poodie: A High-Performance Server-Side Language
Poodie is a new server-side language built on the V8 engine and optimized for performance. It is designed to be typesafe, concurrent, and easy to use for building modern web services. With built-in WebSocket support, environment management, and easy-to-write CRUD routes, Poodie allows you to build high-performance web applications quickly and efficiently.

Key Features:
V8 Engine: High-performance JavaScript engine for fast execution.
Typesafe: A statically-typed language ensuring safety at compile time.
Concurrency: Lightweight concurrency using green threads and actors, with message passing via channels.
WebSocket Support: Real-time bidirectional communication.
CRUD Routes: Simplified route handling for creating RESTful APIs.
.env Support: Easy loading of environment variables from .env files.
.poo File Parsing: Automatically parse .poo files to define routes and handlers.
Optimized Performance: Aims to outperform languages like Rust, Go, and Deno.



Poodie: A High-Performance Server-Side Language
Poodie is a new server-side language built on the V8 engine and optimized for performance. It is designed to be typesafe, concurrent, and easy to use for building modern web services. With built-in WebSocket support, environment management, and easy-to-write CRUD routes, Poodie allows you to build high-performance web applications quickly and efficiently.

Key Features:
V8 Engine: High-performance JavaScript engine for fast execution.
Typesafe: A statically-typed language ensuring safety at compile time.
Concurrency: Lightweight concurrency using green threads and actors, with message passing via channels.
WebSocket Support: Real-time bidirectional communication.
CRUD Routes: Simplified route handling for creating RESTful APIs.
.env Support: Easy loading of environment variables from .env files.
.poo File Parsing: Automatically parse .poo files to define routes and handlers.
Optimized Performance: Aims to outperform languages like Rust, Go, and Deno.
Code Examples:
1. Typesafe Structs:

poodie
Copy code
struct User {
    name: string,
    email: string,
}

fn get_user() -> User {
    return User{
        name: "John Doe",
        email: "john@example.com",
    }
}

fn main() {
    let user = get_user();
    println(user.name);
}
2. Concurrency:

poodie
Copy code
fn handle_request(id: i32) {
    println("Handling request {}", id);
}

fn main() {
    for i in 0..10 {
        go handle_request(i);
    }
}
3. WebSocket Support:

poodie
Copy code
import websocket;

fn on_message(msg: string) {
    println("Received message: {}", msg);
}

fn main() {
    let server = websocket::Server.new(8080);
    server.on_connect(|socket| {
        socket.on_message(on_message);
    });
    server.listen();
}
4. CRUD Routes:

poodie
Copy code
import http;

fn get_user(id: i32) -> string {
    return format("User with ID: {}", id);
}

fn create_user(name: string, email: string) -> string {
    return format("Created user: {} with email: {}", name, email);
}

fn main() {
    http::route("/users/<id:int>", get_user);
    http::route("/users", create_user);
    http::start();
}
5. Environment Variable Loading:

text
Copy code
// .env file
DATABASE_URL=postgres://user:password@localhost/db
SECRET_KEY=my-secret-key
poodie
Copy code
import env;

fn main() {
    env::load(".env");
    let db_url = env::get("DATABASE_URL");
    println("Using database: {}", db_url);
}
6. Reading .poo Files:

poo
Copy code
// routes.poo
GET /users/:id -> get_user
POST /users -> create_user
poodie
Copy code
import poodie_parser;

fn main() {
    let routes = poodie_parser::parse_file("routes.poo");
    
    for route in routes {
        http::route(route.path, route.handler);
    }

    http::start();
}
Running Poodie with .poo File
To run Poodie and parse the .poo file:

Install Poodie:

Clone the Poodie repository from GitHub.
Build the Poodie compiler using make or your preferred build system.
Create an Example .poo File: Create a file called example.poo:

poo
Copy code
GET /users/:id -> get_user
POST /users -> create_user
Write the Server Code: Write a Poodie program that loads the .poo file:

poodie
Copy code
import poodie_parser;

fn main() {
    let routes = poodie_parser::parse_file("example.poo");

    for route in routes {
        http::route(route.path, route.handler);
    }

    http::start();
}
Run the Server:

Run the Poodie program using ./poodie run server.poodie.
The server will start, reading the example.poo file to dynamically register the routes.


Poodie: A High-Performance Server-Side Language
Poodie is a new server-side language built on the V8 engine and optimized for performance. It is designed to be typesafe, concurrent, and easy to use for building modern web services. With built-in WebSocket support, environment management, and easy-to-write CRUD routes, Poodie allows you to build high-performance web applications quickly and efficiently.

Key Features:
V8 Engine: High-performance JavaScript engine for fast execution.
Typesafe: A statically-typed language ensuring safety at compile time.
Concurrency: Lightweight concurrency using green threads and actors, with message passing via channels.
WebSocket Support: Real-time bidirectional communication.
CRUD Routes: Simplified route handling for creating RESTful APIs.
.env Support: Easy loading of environment variables from .env files.
.poo File Parsing: Automatically parse .poo files to define routes and handlers.
Optimized Performance: Aims to outperform languages like Rust, Go, and Deno.
Code Examples:
1. Typesafe Structs:

poodie
Copy code
struct User {
    name: string,
    email: string,
}

fn get_user() -> User {
    return User{
        name: "John Doe",
        email: "john@example.com",
    }
}

fn main() {
    let user = get_user();
    println(user.name);
}
2. Concurrency:

poodie
Copy code
fn handle_request(id: i32) {
    println("Handling request {}", id);
}

fn main() {
    for i in 0..10 {
        go handle_request(i);
    }
}
3. WebSocket Support:

poodie
Copy code
import websocket;

fn on_message(msg: string) {
    println("Received message: {}", msg);
}

fn main() {
    let server = websocket::Server.new(8080);
    server.on_connect(|socket| {
        socket.on_message(on_message);
    });
    server.listen();
}
4. CRUD Routes:

poodie
Copy code
import http;

fn get_user(id: i32) -> string {
    return format("User with ID: {}", id);
}

fn create_user(name: string, email: string) -> string {
    return format("Created user: {} with email: {}", name, email);
}

fn main() {
    http::route("/users/<id:int>", get_user);
    http::route("/users", create_user);
    http::start();
}
5. Environment Variable Loading:

text
Copy code
// .env file
DATABASE_URL=postgres://user:password@localhost/db
SECRET_KEY=my-secret-key
poodie
Copy code
import env;

fn main() {
    env::load(".env");
    let db_url = env::get("DATABASE_URL");
    println("Using database: {}", db_url);
}
6. Reading .poo Files:

poo
Copy code
// routes.poo
GET /users/:id -> get_user
POST /users -> create_user
poodie
Copy code
import poodie_parser;

fn main() {
    let routes = poodie_parser::parse_file("routes.poo");
    
    for route in routes {
        http::route(route.path, route.handler);
    }

    http::start();
}
Running Poodie with .poo File
To run Poodie and parse the .poo file:

Install Poodie:

Clone the Poodie repository from GitHub.
Build the Poodie compiler using make or your preferred build system.
Create an Example .poo File: Create a file called example.poo:

poo
Copy code
GET /users/:id -> get_user
POST /users -> create_user
Write the Server Code: Write a Poodie program that loads the .poo file:

poodie
Copy code
import poodie_parser;

fn main() {
    let routes = poodie_parser::parse_file("example.poo");

    for route in routes {
        http::route(route.path, route.handler);
    }

    http::start();
}
Run the Server:

Run the Poodie program using ./poodie run server.poodie.
The server will start, reading the example.poo file to dynamically register the routes.

Conclusion
Poodie is a high-performance, typesafe language for modern server-side applications. With built-in WebSocket support, CRUD routes, and environment management, it's perfect for building scalable, real-time web services. By leveraging the V8 engine for fast execution and incorporating concurrency models like actors and green threads, Poodie is optimized to be faster than Rust, Go, and Deno.