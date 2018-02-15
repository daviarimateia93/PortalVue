<template>
  <portal-grid :gridHeaders="headers" :gridItems="items">
    <div slot="items">

    </div>
  </portal-grid>
</template>

<script>
import PortalGrid from '@/components/ui/PortalGrid'

export default {
  data () {
    return {
      headers: [
        { text: 'Código', value: 'codigo' },
        {
          text: 'Pessoa',
          align: 'left',
          sortable: false,
          value: 'pessoa'
        },
        { text: 'CPF/CNPJ', value: 'cpfcnpj' },
        { text: 'Criação', value: 'fat' },
        { text: 'Finalização', value: 'finalizacao' },
        { text: 'Status', value: 'status' },
        { text: 'Ações', value: 'iron' }
      ],
      items: [
        {
          codigo: '01',
          pessoa: 'Matheus',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        },
        {
          codigo: '02',
          pessoa: 'Jow',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        }
      ]
    }
  },
  components: {
    PortalGrid
  }
}
</script>

<style>

</style>
