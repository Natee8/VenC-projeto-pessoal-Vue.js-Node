import { IUserDto } from '../../../../packages/domain/dtos/IUser.dto'
import { Users } from '../../../../packages/domain/entities/userAuthEntity'
import { Address } from '../../../../packages/domain/valuesObjects/address'
import { BirthDate } from '../../../../packages/domain/valuesObjects/birthDate'
import { Email } from '../../../../packages/domain/valuesObjects/Email'
import { State } from '../../../../packages/types/address'

export const mapToUsersEntity = (user: IUserDto): Users => {
    const address = user.address
    ? new Address(
        user.address.street,
        user.address.number,
        user.address.number,
        user.address.neighborhood,
        State[user.address.state as keyof typeof State],
        user.address.state,
        user.address.zipCode,
    ) : undefined

    const birthDate = user.birthDate ? new BirthDate(user.birthDate) : undefined

    return new Users(
        user.id.toString(),
        user.name,
        Email.create(user.email),
        user.password,
        address || new Address('','','','',State.SP,'',''),
        user.role,
        user.ImgUrl,
        user.isActive,
        birthDate || new BirthDate(new Date(0)),
        user.createdAt,
        user.updatedAt
    )
}