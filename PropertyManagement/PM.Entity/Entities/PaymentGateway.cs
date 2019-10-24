using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PM.Entity.Entities
{
    public class PaymentGateway
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int paymentId { get; set; }
        public string BankName { get; set; }
        public string AppID { get; set; }
        public string SecretCode { get; set; }
        public string RedirectURL { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? Expiredate { get; set; }
        //public DateTime? LastModifiedDate { get; set; }


    }
}
