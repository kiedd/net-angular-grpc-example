# net-angular-grpc-example
Example .NET backend API with Angular client connected using gRPC protocol

### Create backend app from grpc template
dotnet new grpc -o gRPC.Web.Api

### Create angular project
npm i -g @angular/cli
ng new ClientApp

### Download protoc.exe
Download from releases page https://github.com/protocolbuffers/protobuf/releases/tag/v25.2
Extract bin and include folders into ClientApp/protoc