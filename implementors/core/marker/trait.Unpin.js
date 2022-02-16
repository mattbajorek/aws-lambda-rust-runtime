(function() {var implementors = {};
implementors["extension_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"extension_trait/struct.MyExtension.html\" title=\"struct extension_trait::MyExtension\">MyExtension</a>","synthetic":true,"types":["extension_trait::MyExtension"]}];
implementors["http_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"http_trait/struct.MyHandler.html\" title=\"struct http_trait::MyHandler\">MyHandler</a>","synthetic":true,"types":["http_trait::MyHandler"]}];
implementors["lambda_extension"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.ExtensionError.html\" title=\"struct lambda_extension::ExtensionError\">ExtensionError</a>","synthetic":true,"types":["lambda_extension::error::ExtensionError"]},{"text":"impl&lt;'a, E, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.Extension.html\" title=\"struct lambda_extension::Extension\">Extension</a>&lt;'a, E, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_extension::extension::Extension"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.Identity.html\" title=\"struct lambda_extension::Identity\">Identity</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_extension::extension::Identity"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.MakeIdentity.html\" title=\"struct lambda_extension::MakeIdentity\">MakeIdentity</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_extension::extension::MakeIdentity"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.Tracing.html\" title=\"struct lambda_extension::Tracing\">Tracing</a>","synthetic":true,"types":["lambda_extension::events::Tracing"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.InvokeEvent.html\" title=\"struct lambda_extension::InvokeEvent\">InvokeEvent</a>","synthetic":true,"types":["lambda_extension::events::InvokeEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.ShutdownEvent.html\" title=\"struct lambda_extension::ShutdownEvent\">ShutdownEvent</a>","synthetic":true,"types":["lambda_extension::events::ShutdownEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"lambda_extension/enum.NextEvent.html\" title=\"enum lambda_extension::NextEvent\">NextEvent</a>","synthetic":true,"types":["lambda_extension::events::NextEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.LambdaEvent.html\" title=\"struct lambda_extension::LambdaEvent\">LambdaEvent</a>","synthetic":true,"types":["lambda_extension::events::LambdaEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.LambdaLog.html\" title=\"struct lambda_extension::LambdaLog\">LambdaLog</a>","synthetic":true,"types":["lambda_extension::logs::LambdaLog"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"lambda_extension/enum.LambdaLogRecord.html\" title=\"enum lambda_extension::LambdaLogRecord\">LambdaLogRecord</a>","synthetic":true,"types":["lambda_extension::logs::LambdaLogRecord"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.LogPlatformReportMetrics.html\" title=\"struct lambda_extension::LogPlatformReportMetrics\">LogPlatformReportMetrics</a>","synthetic":true,"types":["lambda_extension::logs::LogPlatformReportMetrics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/struct.LogBuffering.html\" title=\"struct lambda_extension::LogBuffering\">LogBuffering</a>","synthetic":true,"types":["lambda_extension::logs::LogBuffering"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_extension/requests/struct.ErrorRequest.html\" title=\"struct lambda_extension::requests::ErrorRequest\">ErrorRequest</a>&lt;'a&gt;","synthetic":true,"types":["lambda_extension::requests::ErrorRequest"]}];
implementors["lambda_http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"lambda_http/enum.Body.html\" title=\"enum lambda_http::Body\">Body</a>","synthetic":true,"types":["lambda_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"lambda_http/ext/enum.PayloadError.html\" title=\"enum lambda_http::ext::PayloadError\">PayloadError</a>","synthetic":true,"types":["lambda_http::ext::PayloadError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.ApiGatewayV2RequestContext.html\" title=\"struct lambda_http::request::ApiGatewayV2RequestContext\">ApiGatewayV2RequestContext</a>","synthetic":true,"types":["lambda_http::request::ApiGatewayV2RequestContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.ApiGatewayRequestContext.html\" title=\"struct lambda_http::request::ApiGatewayRequestContext\">ApiGatewayRequestContext</a>","synthetic":true,"types":["lambda_http::request::ApiGatewayRequestContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.AlbRequestContext.html\" title=\"struct lambda_http::request::AlbRequestContext\">AlbRequestContext</a>","synthetic":true,"types":["lambda_http::request::AlbRequestContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"lambda_http/request/enum.RequestContext.html\" title=\"enum lambda_http::request::RequestContext\">RequestContext</a>","synthetic":true,"types":["lambda_http::request::RequestContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.Elb.html\" title=\"struct lambda_http::request::Elb\">Elb</a>","synthetic":true,"types":["lambda_http::request::Elb"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.Http.html\" title=\"struct lambda_http::request::Http\">Http</a>","synthetic":true,"types":["lambda_http::request::Http"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/request/struct.Identity.html\" title=\"struct lambda_http::request::Identity\">Identity</a>","synthetic":true,"types":["lambda_http::request::Identity"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_http/struct.StrMap.html\" title=\"struct lambda_http::StrMap\">StrMap</a>","synthetic":true,"types":["lambda_http::strmap::StrMap"]}];
implementors["lambda_runtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_runtime/struct.Context.html\" title=\"struct lambda_runtime::Context\">Context</a>","synthetic":true,"types":["lambda_runtime::types::Context"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_runtime/struct.LambdaEvent.html\" title=\"struct lambda_runtime::LambdaEvent\">LambdaEvent</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_runtime::types::LambdaEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_runtime/struct.Config.html\" title=\"struct lambda_runtime::Config\">Config</a>","synthetic":true,"types":["lambda_runtime::Config"]}];
implementors["lambda_runtime_api_client"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_runtime_api_client/struct.Client.html\" title=\"struct lambda_runtime_api_client::Client\">Client</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_runtime_api_client::Client"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"lambda_runtime_api_client/struct.ClientBuilder.html\" title=\"struct lambda_runtime_api_client::ClientBuilder\">ClientBuilder</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["lambda_runtime_api_client::ClientBuilder"]}];
implementors["logs_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"logs_trait/struct.MyLogsProcessor.html\" title=\"struct logs_trait::MyLogsProcessor\">MyLogsProcessor</a>","synthetic":true,"types":["logs_trait::MyLogsProcessor"]}];
implementors["runtime_fn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"runtime_fn/struct.Request.html\" title=\"struct runtime_fn::Request\">Request</a>","synthetic":true,"types":["runtime_fn::Request"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"runtime_fn/struct.Response.html\" title=\"struct runtime_fn::Response\">Response</a>","synthetic":true,"types":["runtime_fn::Response"]}];
implementors["runtime_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"runtime_trait/struct.Request.html\" title=\"struct runtime_trait::Request\">Request</a>","synthetic":true,"types":["runtime_trait::Request"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"runtime_trait/struct.Response.html\" title=\"struct runtime_trait::Response\">Response</a>","synthetic":true,"types":["runtime_trait::Response"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"runtime_trait/struct.MyHandler.html\" title=\"struct runtime_trait::MyHandler\">MyHandler</a>","synthetic":true,"types":["runtime_trait::MyHandler"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()