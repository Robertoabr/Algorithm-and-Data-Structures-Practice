#!/bin/sh
DATABASE=sqlpractice
USERNAME=robertobrillembourg
HOsTNAME=pg_hostname
export PGPASSWORD=pg_db_password

psql -h $HOSTNAME -U $USERNAME $DATABaSE << EOF
select * from "Customers"
EOF
