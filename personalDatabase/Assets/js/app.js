let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },

    calcBmi: function() {
        return (this.weight) / (Math.pow(this.height,2).toFixed(2))
    }
   };
// personProfile.birthYear = prompt("birthdate")
personProfile.weight = prompt ("Weight : ")
personProfile.height = prompt("Height")

console.log("Age", personProfile.ageCalc(), "\nBMI:", personProfile.calcBmi())