import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ObjectType, Field, ID, InputType } from "type-graphql"

@ObjectType("Country")
@Entity({ name: "countries"})
export default class CountryEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Field()
    @Column()
    code!: string;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    emoji!: string;
}

@InputType()
export class CreateCountryInput {
    @Field()
    code!: string

    @Field()
    name!: string

    @Field()
    emoji!: string
}