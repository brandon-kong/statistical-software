'use client';

import React, { useState } from "react";

import { TypographyH1, TypographyH2 } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CreatePage() {
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(2);

    const [data, setData] = useState<string[]>([]);

    return (
        <div className={'h-screen flex flex-col gap-4 items-center justify-center'}>
            <TypographyH2>
                Create new dataset
            </TypographyH2>

            <div className={'flex gap-4'}>
                <Button
                onClick={() => {
                    setRows(rows + 1);
                    const newData = [...data];
                    newData.push(' ');
                    setData(newData);
                
                }}
                >
                    Add new row
                </Button>
                <Button
                onClick={() => {
                    setColumns(columns + 1);
                    const newData = [...data];
                    newData.forEach((x, i) => {
                        newData[i] = x + ' ';
                    });
                    setData(newData);
                
                }}
                >
                    Add new column
                </Button>
            </div>

            <ScrollArea className={'max-w-3xl w-full mx-auto max-h-[500px]'}>
                <Table className={'w-full mx-auto'}>
                    <TableHeader>
                        <TableRow>
                            {
                                [...Array(columns)].map((x, i) => (
                                    <TableCell key={i} className={'w-10 text-center'}>
                                        { i }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {

                            [...Array(rows)].map((x, i) => (
                                <TableRow key={i} className={`${i % 2 == 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    {
                                        [...Array(columns)].map((x, j) => (
                                            <TableCell key={j} className={'w-10 text-center'}>
                                                <Input
                                                value={data[i * columns + j]}
                                                onChange={(e) => {
                                                    const newData = [...data];
                                                    newData[i * columns + j] = e.target.value;
                                                    setData(newData);
                                                }}
                                                />
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </ScrollArea>
            
        </div>
    )
}