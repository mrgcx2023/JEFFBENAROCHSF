global class ContactMeController {

    @AuraEnabled //Make it available in Javascript
    public static void createLead(String firstname, String lastname, String email, String company, String description, String phone){
        
        Lead lead = new Lead();

        lead.FirstName = firstname;
        lead.LastName = lastname;
        lead.Company = company;
        lead.Email = email;
        lead.Description = description;
        lead.Phone = phone;

        insert lead;
    }
}