import mongoose, { Model, Schema, HydratedDocument } from 'mongoose';

// TypeScript interface for Booking fields
export interface IBooking {
  eventId: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Document type for use with Mongoose methods
export type IBookingDocument = HydratedDocument<IBooking>;

const BookingSchema = new Schema<IBooking, Model<IBooking>>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => {
          // Email validation regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Invalid email format',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: Validate that the referenced event exists
BookingSchema.pre('save', async function () {
  // Only validate eventId if it's new or modified
  if (this.isModified('eventId')) {
    // Dynamically import Event model to avoid circular dependency issues
    const Event = mongoose.models.Event || (await import('./event.model')).default;
    
    const eventExists = await Event.exists({ _id: this.eventId });
    
    if (!eventExists) {
      throw new Error('Referenced event does not exist');
    }
  }
});

// Create index on eventId for faster queries
BookingSchema.index({ eventId: 1 });

// Prevent model recompilation in development
const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
