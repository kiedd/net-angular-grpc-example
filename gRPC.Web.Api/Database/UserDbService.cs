
using System.Collections.Concurrent;

namespace gRPC.Web.Api.Database;

public interface IUserDbService
{
  void CreateUser(CreateUserCommand command);

  IEnumerable<UserEntity> GetUsers();
}

public class UserDbService : IUserDbService
{
  private readonly ConcurrentBag<UserEntity> users = new();

  public void CreateUser(CreateUserCommand command)
  {
    users.Add(new UserEntity
    {
      Name = command.Name,
      Company = command.Company,
      DateCreated = DateTime.Now,
    });
  }

  public IEnumerable<UserEntity> GetUsers()
  {
    return users.ToArray();
  }
}
