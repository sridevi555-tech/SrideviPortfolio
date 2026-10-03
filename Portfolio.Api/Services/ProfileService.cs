using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.DTOs;
using Portfolio.Api.Models;

namespace Portfolio.Api.Services;

public class ProfileService : IProfileService
{
    private readonly PortfolioDbContext _context;

    public ProfileService(PortfolioDbContext context)
    {
        _context = context;
    }

    public async Task<ProfileDto?> GetProfileAsync(int id)
    {
        return await _context.Profiles
            .Where(profile => profile.Id == id)
            .Select(profile => new ProfileDto
            {
                Id = profile.Id,
                Name = profile.Name,
                Title = profile.Title,
                Location = profile.Location,
                ExperienceYears = profile.ExperienceYears
            })
            .FirstOrDefaultAsync();
    }

    public async Task<ProfileDto> CreateProfileAsync(CreateProfileDto profileDto)
    {
        var profile = new Profile
        {
            Name = profileDto.Name,
            Title = profileDto.Title,
            Location = profileDto.Location,
            ExperienceYears = profileDto.ExperienceYears
        };

        _context.Profiles.Add(profile);

        await _context.SaveChangesAsync();

        return new ProfileDto
        {
            Id = profile.Id,
            Name = profile.Name,
            Title = profile.Title,
            Location = profile.Location,
            ExperienceYears = profile.ExperienceYears
        };
    }

    public async Task<ProfileDto?> UpdateProfileAsync(
        int id,
        UpdateProfileDto profileDto)
    {
        var profile = await _context.Profiles
            .FirstOrDefaultAsync(profile => profile.Id == id);

        if (profile is null)
        {
            return null;
        }

        profile.Name = profileDto.Name;
        profile.Title = profileDto.Title;
        profile.Location = profileDto.Location;
        profile.ExperienceYears = profileDto.ExperienceYears;

        await _context.SaveChangesAsync();

        return new ProfileDto
        {
            Id = profile.Id,
            Name = profile.Name,
            Title = profile.Title,
            Location = profile.Location,
            ExperienceYears = profile.ExperienceYears
        };
    }
    public async Task<bool> DeleteProfileAsync(int id)
    {
        var profile = await _context.Profiles
            .FirstOrDefaultAsync(profile => profile.Id == id);

        if (profile is null)
        {
            return false;
        }

        _context.Profiles.Remove(profile);

        await _context.SaveChangesAsync();

        return true;
    }
}