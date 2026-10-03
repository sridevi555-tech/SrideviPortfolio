using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.DTOs;
using Portfolio.Api.Services;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/profile")]
public class ProfileController : ControllerBase
{
    private readonly IProfileService _profileService;

    public ProfileController(IProfileService profileService)
    {
        _profileService = profileService;
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetProfile(int id)
    {
        if (id <= 0)
        {
            return BadRequest(new
            {
                message = "Profile ID must be greater than 0."
            });
        }

        var profile = await _profileService.GetProfileAsync(id);

        if (profile is null)
        {
            return NotFound(new
            {
                message = "Profile not found."
            });
        }


        return Ok(profile);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateProfile(CreateProfileDto profileDto)
    {
        var createdProfile = await _profileService.CreateProfileAsync(profileDto);

        return CreatedAtAction(
            nameof(GetProfile),
            new { id = createdProfile.Id },
            createdProfile);
    }

    [HttpPut("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> UpdateProfile(
    int id,
    UpdateProfileDto profileDto)
    {
        if (id <= 0)
        {
            return BadRequest(new
            {
                message = "Profile ID must be greater than 0."
            });
        }

        var updatedProfile = await _profileService.UpdateProfileAsync(
            id,
            profileDto);

        if (updatedProfile is null)
        {
            return NotFound(new
            {
                message = "Profile not found."
            });
        }

        return Ok(updatedProfile);
    }
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> DeleteProfile(int id)
    {
        if (id <= 0)
        {
            return BadRequest(new
            {
                message = "Profile ID must be greater than 0."
            });
        }

        var deleted = await _profileService.DeleteProfileAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                message = "Profile not found."
            });
        }

        return Ok(new
        {
            message = $"Profile with ID {id} was deleted successfully."
        });
    }
}