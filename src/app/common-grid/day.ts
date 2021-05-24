import { Slot } from "./slot";

export interface Day{
    id: number;
    label: string;
    slots: Slot[];
}