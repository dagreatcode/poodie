use tokio_tungstenite::tungstenite::protocol::Message;
use tokio_tungstenite::accept_async;
use tokio::net::TcpListener;
use futures_util::{StreamExt, SinkExt};  // <-- Import StreamExt and SinkExt
// use tokio_tungstenite::WebSocketStream;
use tokio::net::TcpStream;

pub async fn start_websocket_server() {
    let listener = TcpListener::bind("127.0.0.1:8081")
        .await
        .expect("Failed to bind to address");

    println!("WebSocket server running on ws://127.0.0.1:8081");

    while let Ok((stream, _)) = listener.accept().await {
        tokio::spawn(handle_connection(stream));
    }
}

async fn handle_connection(stream: TcpStream) {
    let ws_stream = accept_async(stream)
        .await
        .expect("Failed to accept WebSocket connection");

    let (mut write, mut read) = ws_stream.split();  // <-- Now works because StreamExt is in scope

    while let Some(message) = read.next().await {
        let message = message.expect("Failed to read message");
        if message.is_text() {
            let reply = format!("Echo: {}", message.to_text().unwrap());
            write.send(Message::Text(reply)).await.expect("Failed to send message");
        }
    }
}
