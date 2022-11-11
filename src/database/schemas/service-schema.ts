import { DataTypes } from 'sequelize'

export default {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    commission: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    timeExp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}