import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'notifications' })
export class Notification extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column(DataType.UUID)
  senderId: string | null;

  @Column(DataType.UUID)
  userId: string;

  @Column(DataType.UUID)
  companyId: string;

  @Column(DataType.BOOLEAN)
  seen: boolean;

  @Column(DataType.ENUM('default', 'system', 'activity'))
  type: 'default' | 'system' | 'activity';

  @Column(DataType.BOOLEAN)
  read: boolean;

  @Column(DataType.STRING)
  text: string;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  link: string | null;
}
