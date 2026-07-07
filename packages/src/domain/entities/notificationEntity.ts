import { NotificationType } from "../../types/INotificationType";

export class Notification {
  constructor(
    public readonly id: string,
    public readonly userId: number,
    public readonly type: NotificationType,
    public readonly fromUserId: number | null,
    public message: string,
    public read: boolean,
    public readonly createdAt: Date,
  ) {}

  markAsRead() {
    this.read = true;
  }

  canBeSeenBy(userId: number) {
    return this.userId === userId;
  }
}
