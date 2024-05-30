import React from "react";

export interface HeaderInterface {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>
}