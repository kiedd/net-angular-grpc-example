using Grpc.Core;
using gRPC.Web.Api;
using static gRPC.Web.Api.UserApi;
using gRPC.Web.Api.Database;
using System.Globalization;
using Google.Protobuf.WellKnownTypes;

namespace gRPC.Web.Api.Services;

public class UserService : UserApiBase
{
  private readonly ILogger<GreeterService> _logger;
  private readonly IUserDbService _userDbService;

  public UserService(ILogger<GreeterService> logger, IUserDbService userDbService)
  {
    _logger = logger;
    _userDbService = userDbService;
  }

  public override Task<Empty> Create(CreateUserCommand request, ServerCallContext context)
  {
    _userDbService.CreateUser(request);
    return Task.FromResult(new Empty());
  }

  public override Task<UsersReply> Get(Empty request, ServerCallContext context)
  {

    var reply = new UsersReply();
    reply.Users.AddRange(_userDbService.GetUsers().Select(user => new User { Name = user.Name, Company = user.Company, DateCreated = user.DateCreated.ToString(CultureInfo.InvariantCulture) }));
    return Task.FromResult(reply);
  }
}


