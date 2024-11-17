#include <v8.h>
#include <iostream>
#include <string>

int main(int argc, char* argv[]) {
    // Initialize V8
    v8::V8::InitializeICU();
    v8::V8::InitializeExternalStartupData(".");
    v8::V8::InitializePlatform(v8::platform::NewDefaultPlatform().release());
    v8::V8::Initialize();

    v8::Isolate::CreateParams create_params;
    v8::Isolate* isolate = v8::Isolate::New(create_params);
    v8::Isolate::Scope isolate_scope(isolate);
    v8::HandleScope handle_scope(isolate);

    // Create a new context
    v8::Local<v8::Context> context = v8::Context::New(isolate);

    // Enter the context
    v8::Context::Scope context_scope(context);

    // Compile and run a JavaScript program
    const char* source = "console.log('Hello, world!');";
    v8::Local<v8::String> source_str = v8::String::NewFromUtf8(isolate, source).ToLocalChecked();
    v8::Local<v8::Script> script = v8::Script::Compile(context, source_str).ToLocalChecked();
    script->Run(context);

    // Dispose of the isolate
    isolate->Dispose();

    // Shutdown V8
    v8::V8::Dispose();
    v8::V8::ShutdownPlatform();

    return 0;
}
