
export const ImageGridItem = (item) => {
    return `
        <a href="#" class="group relative block bg-black">
            <img 
                src="/assets/img/${item.image}"
                alt="Photo of ${item.name}"
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-xl font-bold text-white sm:text-2xl">
                    ${item.name}
                </p>
                <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-sm text-white">
                            ${item.description}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    `
}

export const ImageGrid = (items) => {
    return `
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                ${items.map(item => ImageGridItem(item)).join('')}
            </div>
        </div>
    `;
}
