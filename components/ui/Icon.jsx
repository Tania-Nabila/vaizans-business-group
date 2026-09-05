import {
    Users,
    Target,
    TrendingUp,
    Building,
    DollarSign,
    Calendar,
    Crown,
    Award,
    Handshake,
    Shield,
    Eye,
    MapPin,
    Mail,
    Phone,
    MessageSquare,
    Facebook,
    Twitter,
    Linkedin,
    ArrowRight,
    CheckCircle,
    Plus,
    Menu,
    X,
    ChevronDown,
    Home,
    Inbox,
    Search,
    Settings,
    ShoppingBag,
    Camera,
    PanelLeft,
    Clock
} from "lucide-react"

const iconMap = {
    Users,
    ShoppingBag,
    Camera,
    Target,
    TrendingUp,
    Building,
    DollarSign,
    Calendar,
    Crown,
    Award,
    Handshake,
    Shield,
    Eye,
    MapPin,
    Mail,
    Phone,
    MessageSquare,
    Facebook,
    Twitter,
    Linkedin,
    ArrowRight,
    CheckCircle,
    Plus,
    Menu,
    X,
    ChevronDown,
    Home,
    Inbox,
    Search,
    Settings,
    PanelLeft,
    Clock
}

export function Icon({ name, className, ...props }) {
    const IconComponent = iconMap[name]

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`)
        return null
    }

    return <IconComponent className={className} {...props} />
}
