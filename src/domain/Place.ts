interface IPlace {
    description: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
        main_text_matched_substrings: [
            {
                offset: number;
                length: number;
            },
        ];
    };
}

export default IPlace;