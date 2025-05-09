import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<
  InferAttributes<Hotel>,
  InferCreationAttributes<Hotel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare address: string;
  declare location: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date | null>;
  declare rating?: number;
  declare ratingCount?: number;
}

Hotel.init(
  {
    id: {
      type: "int",
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: "string",
      allowNull: false,
    },
    address: {
      type: "string",
      allowNull: false,
    },
    location: {
      type: "string",
      allowNull: false,
    },
    createdAt: {
      type: "date",
      defaultValue: new Date(),
    },
    updatedAt: {
      type: "date",
      defaultValue: new Date(),
    },
    deletedAt: {
      type: "date",
      allowNull: true,
      defaultValue: null,
    },
    rating: {
      type: "float",
      defaultValue: 0,
    },
    ratingCount: {
      type: "int",
      defaultValue: 0,
    },
  },

  {
    tableName: "hotels",
    sequelize: sequelize, // passing the `sequelize` instance is required
    timestamps: true, // enables the creation of createdAt and updatedAt
    underscored: true, // enables the creation of created_at and updated_at
  }
);

export default Hotel;
