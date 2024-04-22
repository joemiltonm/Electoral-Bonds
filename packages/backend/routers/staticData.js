
import express from 'express';
import { db } from '../index.js';


export const staticData = express.Router();


staticData.get('/total/:party', async (req, res) => {
    
    const pol = req.params.party
    const total = await db('bonds').sum('Denominations as total_amount')
    const [party] = await db('bonds').countDistinct('Political_Party')
    const [purchaser] = await db('bonds').countDistinct('purchaser')
    const partyProportion = await db('bonds').select('Political_Party').sum({ total_funds: 'Denominations' }).groupBy('Political_Party')
    const purchaseProportion = await db('bonds').select('purchaser').sum({ total_funds: 'Denominations' }).groupBy('purchaser').orderBy('total_funds', 'desc')

    const donors = await db('bonds').select('purchaser').
        where('Political_Party', '=', pol).
        sum('Denominations').
        groupBy('purchaser').
        orderBy('sum', 'desc')

    res.status(200).send(donors)
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

