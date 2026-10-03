using System.ComponentModel.DataAnnotations;

namespace Portfolio.Api.DTOs;

public class CreateProfileDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Location { get; set; } = string.Empty;

    [Range(0, 50)]
    public int ExperienceYears { get; set; }
}