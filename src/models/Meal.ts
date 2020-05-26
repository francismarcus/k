import mongoose, { Document } from 'mongoose';

interface MealDoc extends Document {
	date: string;
	label: string;
	calories: number;
	carbs: number;
	fat: number;
	protein: number;
	userId: string;
}

const mealSchema = new mongoose.Schema({
	date: { type: String, required: true },
	label: { type: String, required: true },
	calories: { type: Number, required: true },
	carbs: { type: Number },
	fat: { type: Number },
	protein: { type: Number },
	userId: { type: String, required: true }
});

export const Meal = mongoose.model<MealDoc>('Meal', mealSchema);
