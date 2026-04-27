import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  declare birthDayDate?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare profilePhoto?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare profileStatus?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare userLocation?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare userWorkPlace?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userEducation?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userActivity?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteMusic?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteMovies?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteTVShows?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteBooks?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteGames?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userFavoriteQuotes?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare userAboutMe?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare userMaritalStatus?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare userLanguageProficiency?: string;
}
