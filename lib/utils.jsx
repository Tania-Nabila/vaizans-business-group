

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export function getStatusColor(status) {
    const colors = {
        Completed: "bg-green-100 text-green-800",
        Ongoing: "bg-blue-100 text-blue-800",
        Active: "bg-blue-100 text-blue-800",
        Planning: "bg-yellow-100 text-yellow-800",
        Research: "bg-purple-100 text-purple-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
}

export function getCategoryColor(category) {
    const colors = {
        Aquaculture: "bg-blue-100 text-blue-800",
        Poultry: "bg-green-100 text-green-800",
        Retail: "bg-purple-100 text-purple-800",
        Livestock: "bg-orange-100 text-orange-800",
        Agriculture: "bg-emerald-100 text-emerald-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
}
