using gRPC.Web.Api.Database;
using gRPC.Web.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.

builder.Services.AddCors(o => o.AddPolicy("AllowOrigin", builder =>
{
  builder.WithOrigins("http://localhost:4200")
          .AllowAnyMethod()
          .AllowAnyHeader();
}));

builder.Services.AddGrpc();

builder.Services.AddSingleton<IUserDbService, UserDbService>();

var app = builder.Build();

app.UseCors();
app.UseGrpcWeb();

// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>().EnableGrpcWeb().RequireCors("AllowOrigin");
app.MapGrpcService<UserService>().EnableGrpcWeb().RequireCors("AllowOrigin");
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
