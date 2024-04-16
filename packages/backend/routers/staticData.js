
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



