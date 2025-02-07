function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic") {
        return "Basic Plan: $20/month"; 
    } else if (planType === "Premium") {

        if (wantsTrainer && wantsDietPlan) {
            return "Premium Plan: $50/month with Trainer and Diet Plan";
        } else if (wantsTrainer) {
            return "Premium Plan: $50/month with Trainer";
        } else if (wantsDietPlan) {
            return "Premium Plan: $50/month with Diet Plan";
        }
    } else if (planType === "VIP") {
        return "VIP Plan: $80/month with Trainer and Diet Plan"; 
    }
    return "Invalid Plan Type"; 
}


console.log(choosePlan("Premium", true, false)); // Output: Premium Plan: $50/month with Trainer
