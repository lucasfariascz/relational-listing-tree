import Tree from './tree.js';

const tree = [
  { "id": "1", "parent": "#", "text": "1 - ATIVO"},
  { "id": "11", "parent": "1", "text": "11 - ATIVO CIRCULANTE " },
  { "id": "12", "parent": "1", "text": "12 - ATIVO NAO CIRCULANTE" },
  { "id": "13", "parent": "1", "text": "13 - ATIVO PERMANENTE" },
  { "id": "14", "parent": "1", "text": "14 - ATIVO DIFERIDO" },
  { "id": "15", "parent": "1", "text": "15 - OUTRAS IMOBILIZACOES" },
  { "id": "111", "parent": "11", "text": "111 - DISPONIVEL" },
  { "id": "112", "parent": "11", "text": "112 - CREDITOS" },
  { "id": "113", "parent": "11", "text": "113 - MERCADORIAS" },
  { "id": "118", "parent": "11", "text": "118 - BENS DE TERCEIROS(NOSSO PODER)" },
  { "id": "119", "parent": "11", "text": "119 - BENS EM PODER DE TERCEIROS" },
  { "id": "121", "parent": "12", "text": "121 - REALIZAVEL A LONGO PRAZO" },
  { "id": "122", "parent": "12", "text": "122 - INVESTIMENTOS" },
  { "id": "123", "parent": "12", "text": "123 - IMOBILIZADO" },
  { "id": "124", "parent": "12", "text": "124 - INTANGÍVEL" },
  { "id": "132", "parent": "13", "text": "132 - IMOBILIZADO" },
  { "id": "141", "parent": "14", "text": "141 - DIFERIDO" },
  { "id": "151", "parent": "15", "text": "151 - OUTRAS IMOBILIZACOES" },
  { "id": "11101", "parent": "111", "text": "11101 - CAIXA" },
  { "id": "11102","parent": "111","text": "11102 - BANCO CONTA MOVIMENTO" },
  { "id": "11103","parent": "111","text": "11103 - BANCOS CONTA APLICACAO" },
  { "id": "11201","parent": "112","text": "11201 - DUPLICATAS A RECEBER EXTERIOR" },
  { "id": "11202","parent": "112","text": "11202 - ADIANTAMENTO DE REPRESENTAÇÃO" },
  { "id": "11203","parent": "112","text": "11203 - ADIANTAMENTO A FUNCIONÁRIOS" },
  { "id": "11204","parent": "112","text": "11204 - COFINS A RECUPERAR - ATIVO FIXO" },
  { "id": "11205","parent": "112","text": "11205 - LEASING - AMORTIZAÇÃO" },
  { "id": "11208","parent": "112","text": "11208 - EMPRESTIMOS MÚTUO A RECEBER" },
  { "id": "11301","parent": "113","text": "11301 - MATERIAL EM ARMAZEM" },
  { "id": "11302","parent": "113","text": "11302 - IMPORTAÇÕES EM ANDAMENTO" },
  { "id": "11303","parent": "113","text": "11303 - TRANSITORIA DE ESTOQUE" },
  { "id": "11304","parent": "113","text": "11304 - ESTOQUE DE TERCEIROS" },
  { "id": "11801","parent": "118","text": "11801 - MATERIAIS DE TERCEIROS" },
  { "id": "11802","parent": "118","text": "11802 - BEM EM COMODATO" },
  { "id": "11901","parent": "119","text": "11901 - EQUIP NOSSO REMET P/ CONSERTO/TROCA" },
];

Tree(tree);
