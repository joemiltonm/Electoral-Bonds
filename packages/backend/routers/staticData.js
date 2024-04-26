
import express from 'express';
import { db } from '../index.js';


export const staticData = express.Router();


staticData.get('/total', async (req, res) => {
    
    //const pol = req.params.party
    const total = await db('bonds').sum('Denominations as total_amount')
    const [party] = await db('bonds').countDistinct('Political_Party')
    const [purchaser] = await db('bonds').countDistinct('purchaser')
    const partyProportion = await db('bonds').select('Political_Party as name').sum({ value: 'Denominations' }).groupBy('Political_Party').orderBy('value', 'desc')
    const purchaseProportion = await db('bonds').select('purchaser as name').sum({ value: 'Denominations' }).groupBy('purchaser').orderBy('value', 'desc')

    const formattedData = partyProportion.map(item => ({
        name: item.name,
        value: (parseInt(item.value, 10)/10000000)
    }));

    const formattedDataPurchase = purchaseProportion.map(item => ({
        name: item.name,
        value: (parseInt(item.value, 10)/10000000)
    }));
    
    // const donors = await db('bonds').select('purchaser').
    //     where('Political_Party', '=', pol).
    //     sum('Denominations').
    //     groupBy('purchaser').
    //     orderBy('sum', 'desc')

    const final = {
        formattedData,
        total,
        party,
        purchaser,
        formattedDataPurchase
    }
    res.status(200).json(final)
})



staticData.post('/queryBuilder', async (req, res) => {
    const query = req.body;

    const selectedColumns = []
    
    let queryBuilder = db('bonds')

    query.forEach((element, index) => {
        selectedColumns.push(element.column)
        if (element.condition === 'equal to') {
            queryBuilder = queryBuilder.where(element.column, '=', element.value)
        }
        else if (element.condition === 'greater than') {
            queryBuilder = queryBuilder.where(element.column, '>', element.value)
            
        }       
    })

    const results = await queryBuilder.select(selectedColumns)

    let sum = 0 

    results.forEach(element => {

        sum += parseInt(element.Denominations)

    })

    console.log(sum/10000000, "crores")

    res.send(results)
    
})


staticData.get('/branch', async (req, res) => {
    const results = await db('combined_table').select('*')
    const final = await db('combined_table').select('Political_Party','purchaser').
        sum('Denominations').where('state', '=', 'Delhi').groupBy('Political_Party', 'purchaser')
    console.log(final)
    res.status(200).send(final)
})  

const fiscalYears = [
    { name: 'FY20', startDate: '2019-04-01', endDate: '2020-03-31' },
    { name: 'FY21', startDate: '2020-04-01', endDate: '2021-03-31' },
    { name: 'FY22', startDate: '2021-04-01', endDate: '2022-03-31' },
    { name: 'FY23', startDate: '2022-04-01', endDate: '2023-03-31' },
    { name: 'FY24', startDate: '2023-04-01', endDate: '2024-03-31' }
];

staticData.get('/state', async (req, res) => {
    const statefinal = await db('combined_table').select('state').
        sum('Denominations').groupBy('state')

    const results = await Promise.all(fiscalYears.map(fy =>
      db('combined_table')
        .select(db.raw(`'${fy.name}' as name`))
        .sum({ value: 'Denominations' })
        .whereBetween('date_of_purchase', [fy.startDate, fy.endDate])
    ));

    let obj = []

    const final = results.map((fy, index) => {
        obj.push(fy[0])
    })
    console.log(obj)
    // Send the results as JSON
    res.send(obj);

})