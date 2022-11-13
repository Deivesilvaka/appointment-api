import { DataTypes } from 'sequelize'

export default {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patient: {
        type: DataTypes.STRING,
        allowNull: false
    },
    services: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    timeExp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fullPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    commission: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isAccept: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}