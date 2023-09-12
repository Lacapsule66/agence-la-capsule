import { NextRequest, NextResponse } from "next/server";


const annuaire = [
    {
        id: 1,
        name : 'Cabinet infirmier argelès-sur-mer',
        address : {
            street : '4 rue Victor Hugo',
            city : 'Argelès-sur-mer',
            zip : '66700'
        },
        
        }
]

export async function GET() {
    return NextResponse.json(annuaire, { status: 200 });
}
