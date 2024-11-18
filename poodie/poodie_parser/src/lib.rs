use regex::Regex;
use std::fs;

#[derive(Debug)]
pub struct PoodieRoute {
    pub path: String,
    pub handler: String,
}

pub struct PoodieParser;

impl PoodieParser {
    // Parses a Poodie (.poo) file and extracts routes and their handlers
    pub fn parse_poo_file(file_path: &str) -> Result<Vec<PoodieRoute>, String> {
        let content = fs::read_to_string(file_path).map_err(|e| e.to_string())?;
        let mut routes = Vec::new();

        // Regex patterns to capture route and WebSocket definitions in .poo files
        let route_regex = Regex::new(r#"route\("([^"]+)",\s*"([^"]+)"\);"#).unwrap();
        let ws_regex = Regex::new(r#"ws\("([^"]+)",\s*"([^"]+)"\);"#).unwrap();

        for cap in route_regex.captures_iter(&content) {
            routes.push(PoodieRoute {
                path: cap[1].to_string(),
                handler: cap[2].to_string(),
            });
        }

        for cap in ws_regex.captures_iter(&content) {
            routes.push(PoodieRoute {
                path: cap[1].to_string(),
                handler: cap[2].to_string(),
            });
        }

        Ok(routes)
    }
}
