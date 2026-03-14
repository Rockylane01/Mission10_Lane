export type Bowler = {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerLastName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    team?: {  // Nested: Optional team object
        teamId: number;
        teamName: string;
    };
}