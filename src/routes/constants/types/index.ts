import React from "react";

export interface IRoutesList {
    id: number;
    index?: boolean;
    path?: string;
    element: React.FC;
}