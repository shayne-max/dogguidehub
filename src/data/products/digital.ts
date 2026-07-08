export interface DigitalProduct {
  title: string;
  description: string;
  image: string;
  link?: string; // Creative Fabrica链接，店铺开通前留空
}

export const digitalProducts: DigitalProduct[] = [
  {
    title: "Daily Feeding Tracker",
    description: "Log meals, portions, and treats for your dog every day.",
    image: "/images/products/feeding-tracker.jpg",
  },
  {
    title: "Puppy Health Record",
    description: "Track vet visits, vaccinations, and medications in one place.",
    image: "/images/products/health-record.jpg",
  },
  {
    title: "Training Progress Log",
    description: "Record commands practiced and progress week by week.",
    image: "/images/products/training-log.jpg",
  },
  {
    title: "Dog Breed Comparison Checklist",
    description: "Compare traits, needs, and temperament before choosing a breed.",
    image: "/images/products/breed-comparison.jpg",
  },
  {
    title: "Dog Memory Book & Milestone Tracker",
    description: "Capture first walks, birthdays, and every special moment.",
    image: "/images/products/memory-book.jpg",
  },
  {
    title: "Exercise & Walk Log",
    description: "Track daily walks, distance, and activity levels.",
    image: "/images/products/walk-log.jpg",
  },
  {
    title: "Multi-Dog Household Tracker",
    description: "Keep feeding, meds, and schedules organized for multiple dogs.",
    image: "/images/products/multi-dog-tracker.jpg",
  },
  {
    title: "New Puppy Prep Checklist",
    description: "Everything to prepare before your new puppy comes home.",
    image: "/images/products/puppy-prep-checklist.jpg",
  },
  {
    title: "Pet Expense Tracker",
    description: "Track food, vet, and grooming costs to stay on budget.",
    image: "/images/products/expense-tracker.jpg",
  },
  {
    title: "Pet Insurance Comparison Sheet",
    description: "Compare coverage, cost, and exclusions across plans side by side.",
    image: "/images/products/insurance-comparison.jpg",
  },
  {
    title: "Rainbow Bridge Memorial Keepsake",
    description: "A gentle keepsake to remember a beloved companion.",
    image: "/images/products/memorial-keepsake.jpg",
  },
  {
    title: "Senior Dog Care Checklist",
    description: "Gentle care guidance for your dog's golden years.",
    image: "/images/products/senior-care-checklist.jpg",
  },
];
