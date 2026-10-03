using Portfolio.Api.DTOs;

namespace Portfolio.Api.Services;

public interface IProfileService
{
    Task<ProfileDto?> GetProfileAsync(int id);
    Task<ProfileDto> CreateProfileAsync(CreateProfileDto profileDto);
    Task<ProfileDto?> UpdateProfileAsync(int id, UpdateProfileDto profileDto);
    Task<bool> DeleteProfileAsync(int id);
}