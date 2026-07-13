export interface DigitalProduct {
  title: string;
  description: string;
  image: string;
  link?: string; // Gumroad商品链接（Creative Fabrica店铺开通后可切换/追加）
}

export const digitalProducts: DigitalProduct[] = [
  {
    title: "Daily Feeding Tracker",
    description: "Log meals, portions, and treats for your dog every day.",
    image: "/images/products/feeding-tracker.jpg",
    link: "https://shayne15.gumroad.com/l/dog-feeding-nutrition-planner",
  },
  {
    title: "Puppy Health Record",
    description: "Track vet visits, vaccinations, and medications in one place.",
    image: "/images/products/health-record.jpg",
    link: "https://shayne15.gumroad.com/l/dog-health-wellness-tracker",
  },
  {
    title: "Training Progress Log",
    description: "Record commands practiced and progress week by week.",
    image: "/images/products/training-log.jpg",
    link: "https://shayne15.gumroad.com/l/dog-training-progress-tracker",
  },
  {
    title: "Dog Breed Comparison Checklist",
    description: "Compare traits, needs, and temperament before choosing a breed.",
    image: "/images/products/breed-comparison.jpg",
    link: "https://shayne15.gumroad.com/l/dog-breed-comparison-checklist",
  },
  {
    title: "Dog Memory Book & Milestone Tracker",
    description: "Capture first walks, birthdays, and every special moment.",
    image: "/images/products/memory-book.jpg",
    link: "https://shayne15.gumroad.com/l/dog-memory-book-milestone-tracker",
  },
  {
    title: "Exercise & Walk Log",
    description: "Track daily walks, distance, and activity levels.",
    image: "/images/products/walk-log.jpg",
    link: "https://shayne15.gumroad.com/l/dog-exercise-walk-log",
  },
  {
    title: "Multi-Dog Household Tracker",
    description: "Keep feeding, meds, and schedules organized for multiple dogs.",
    image: "/images/products/multi-dog-tracker.jpg",
    link: "https://shayne15.gumroad.com/l/multi-dog-household-tracker",
  },
  {
    title: "New Puppy Prep Checklist",
    description: "Everything to prepare before your new puppy comes home.",
    image: "/images/products/puppy-prep-checklist.jpg",
    link: "https://shayne15.gumroad.com/l/new-puppy-prep-checklist",
  },
  {
    title: "Pet Expense Tracker",
    description: "Track food, vet, and grooming costs to stay on budget.",
    image: "/images/products/expense-tracker.jpg",
    link: "https://shayne15.gumroad.com/l/pet-expense-tracker",
  },
  {
    title: "Pet Insurance Comparison Sheet",
    description: "Compare coverage, cost, and exclusions across plans side by side.",
    image: "/images/products/insurance-comparison.jpg",
    link: "https://shayne15.gumroad.com/l/pet-insurance-comparison-sheet",
  },
  {
    title: "Rainbow Bridge Memorial Keepsake",
    description: "A gentle keepsake to remember a beloved companion.",
    image: "/images/products/memorial-keepsake.jpg",
    link: "https://shayne15.gumroad.com/l/rainbow-bridge-memorial-keepsake",
  },
  {
    title: "Senior Dog Care Checklist",
    description: "Gentle care guidance for your dog's golden years.",
    image: "/images/products/senior-care-checklist.jpg",
    link: "https://shayne15.gumroad.com/l/senior-dog-care-checklist",
  },
];
