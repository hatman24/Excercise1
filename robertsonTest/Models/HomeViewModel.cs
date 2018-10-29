using System;
using System.ComponentModel.DataAnnotations;

namespace robertsonTest.Models
{
    public class HomeViewModel
    {
        [Display(Name = "Amount")]
        public int amountInput { get; set; }
    }
}
