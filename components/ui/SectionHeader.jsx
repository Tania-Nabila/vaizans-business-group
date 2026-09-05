export function SectionHeader({ title, subtitle, centered = true }) {
    return (
        <div className={`mb-16 ${centered ? "text-center" : ""}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
    )
}
