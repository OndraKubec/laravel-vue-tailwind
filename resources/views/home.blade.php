<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Home') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="col-start-1 col-end-4">{{ __('Title') }}</div>
                        <div class="col-start-4 col-end-12" >{{ __('Description') }}</div>
                        <div class="col-start-12">{{ __('Actions') }}</div>
                    </div>

                    @foreach ($data as $line)
                    <div class="grid grid-cols-12 gap-2 mt-2">
                        <form action="" class="grid grid-cols-7 col-start-1 col-end-9 gap-2">
                            <x-input type="text" value="{{ $line->title }}" class="col-start-1 col-end-3" />
                            <x-input type="text" value="{{ $line->description }}" class="col-start-3 col-end-7" />
                            <x-button type="submit" class="hidden">{{ __('Change') }}</x-button>
                        </form>
                    </div>
                    @endforeach

                </div>
            </div>
        </div>
    </div>
</x-app-layout>